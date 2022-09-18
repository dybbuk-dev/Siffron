import mongoose from 'mongoose';
import ProductFacingSchema from './schemas/productFacingSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('facing');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const FacingSchema = new Schema(
    {
      model: {
        type: String,
        required: true,
        maxlength: 200,
      },
      type: {
        type: String,
        required: true,
        enum: ['Pusher', 'Hook'],
      },
      sn: {
        type: String,
        required: true,
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
      shelf: {
        type: Schema.Types.ObjectId,
        ref: 'shelf',
        required: true,
      },
      product: [ProductFacingSchema],
      importHash: { type: String },
    },
    { timestamps: true },
  );

  FacingSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  FacingSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  FacingSchema.set('toJSON', {
    getters: true,
  });

  FacingSchema.set('toObject', {
    getters: true,
  });

  return database.model('facing', FacingSchema);
};
