import * as yup from 'yup';
import { i18n } from 'src/i18n';
import moment from 'moment';

const yupFilterSchemas = {
  generic(label) {
    return yup.mixed().label(label);
  },
  string(label) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);
  },
  stringArray(label) {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(
        yup
          .string()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .trim(),
      )
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return originalValue;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return [originalValue];
      });

    return yupChain;
  },
  boolean(label) {
    return yup.bool().nullable(true).label(label);
  },
  relationToOne(label) {
    return yup
      .mixed()
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });
  },
  relationToMany(label) {
    return yup
      .mixed()
      .label(label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }

        return originalValue.map((item) => item.id);
      });
  },
  json(label) {
    return yup.mixed().label(label);
  },
  integer(label) {
    return yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .integer()
      .nullable(true)
      .label(label);
  },
  integerRange(label) {
    return yup.mixed().label(label);
  },
  enumerator(label) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .label(label)
      .nullable(true);
  },
  email(label) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);
  },
  decimal(label) {
    let yupChain = yup
      .number()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .nullable(true)
      .label(label);

    return yupChain;
  },
  decimalRange(label) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .number()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .nullable(true)
          .label(label),
      )
      .label(label);
  },
  datetime(label) {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(label)
      .transform((value, originalValue) =>
        originalValue
          ? moment(
              originalValue,
              'YYYY-MM-DD HH:mm',
            ).toISOString()
          : null,
      );

    return yupChain;
  },
  datetimeRange(label) {
    return yup.mixed().label(label);
  },
  date(label) {
    return yup
      .mixed()
      .nullable(true)
      .label(label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      );
  },
  dateRange(label) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .mixed()
          .nullable(true)
          .label(label)
          .test(
            'is-date',
            i18n('validation.mixed.default'),
            (value) => {
              if (!value) {
                return true;
              }

              return moment(value, 'YYYY-MM-DD').isValid();
            },
          )
          .transform((value) =>
            value
              ? moment(value).format('YYYY-MM-DD')
              : null,
          ),
      )
      .label(label);
  },
};

export default yupFilterSchemas;
