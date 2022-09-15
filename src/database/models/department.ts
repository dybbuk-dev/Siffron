import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('department');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const DepartmentSchema = new Schema(
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
      importHash: { type: String },
    },
    { timestamps: true },
  );

  DepartmentSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  DepartmentSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  DepartmentSchema.set('toJSON', {
    getters: true,
  });

  DepartmentSchema.set('toObject', {
    getters: true,
  });

  return database.model('department', DepartmentSchema);
};
