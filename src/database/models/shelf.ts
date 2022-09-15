import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('shelf');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ShelfSchema = new Schema(
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
      section: {
        type: Schema.Types.ObjectId,
        ref: 'section',
        required: true,
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ShelfSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  ShelfSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ShelfSchema.set('toJSON', {
    getters: true,
  });

  ShelfSchema.set('toObject', {
    getters: true,
  });

  return database.model('shelf', ShelfSchema);
};
