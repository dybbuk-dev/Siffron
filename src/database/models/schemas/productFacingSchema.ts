import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductFacingSchema = new Schema(
  {
    model: { type: String, maxlength: 255 },
    version: { type: String, maxlength: 255 },
    sku: { type: String, maxlength: 255 },
    qty: { type: Number },
  },
  { timestamps: true },
);

ProductFacingSchema.virtual('id').get(function () {
  // @ts-ignore
  return this._id.toHexString();
});

ProductFacingSchema.set('toJSON', {
  getters: true,
});

ProductFacingSchema.set('toObject', {
  getters: true,
});

export default ProductFacingSchema;
