import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('shop');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ShopSchema = new Schema(
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
      manager: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ShopSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  ShopSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ShopSchema.set('toJSON', {
    getters: true,
  });

  ShopSchema.set('toObject', {
    getters: true,
  });

  return database.model('shop', ShopSchema);
};
