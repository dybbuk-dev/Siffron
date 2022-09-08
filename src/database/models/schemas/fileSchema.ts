import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FileSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 21845,
      required: true,
    },
    sizeInBytes: { type: Number },
    privateUrl: { type: String, maxlength: 21845 },
    publicUrl: {
      type: String,
      maxlength: 21845,
      required: false,
    },
    tenant: {
      type: Schema.Types.ObjectId,
      ref: 'tenant',
    },
  },
  { timestamps: true },
);

FileSchema.virtual('id').get(function () {
  // @ts-ignore
  return this._id.toHexString();
});

FileSchema.set('toJSON', {
  getters: true,
});

FileSchema.set('toObject', {
  getters: true,
});

export default FileSchema;
