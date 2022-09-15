import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('tenant');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const TenantSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        maxlength: 255,
      },
      url: { type: String, maxlength: 1024 },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String, maxlength: 255 },
    },
    { timestamps: true },
  );

  TenantSchema.index(
    { importHash: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  TenantSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  TenantSchema.set('toJSON', {
    getters: true,
  });

  TenantSchema.set('toObject', {
    getters: true,
  });

  return database.model('tenant', TenantSchema);
};
