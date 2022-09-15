import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('section');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const SectionSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop',
        required: true,
      },
      department: {
        type: Schema.Types.ObjectId,
        ref: 'department',
        required: true,
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  SectionSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  SectionSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  SectionSchema.set('toJSON', {
    getters: true,
  });

  SectionSchema.set('toObject', {
    getters: true,
  });

  return database.model('section', SectionSchema);
};
