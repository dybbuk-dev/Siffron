import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import pageEnumerators from '../../../modules/page/pageEnumerators';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import PageAutocompleteFormItem from 'src/view/page/autocomplete/PageAutocompleteFormItem';
import CheckboxFormItem from 'src/view/shared/form/items/CheckboxFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import NavigationAutocompleteFormItem from 'src/view/navigation/autocomplete/NavigationAutocompleteFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';
import AuthorAutocompleteFormItem from 'src/view/author/autocomplete/AuthorAutocompleteFormItem';
import LogoFormItem from 'src/view/shared/form/items/LogoFormItem';
import HtmlEditorFormItem from 'src/view/shared/form/items/HtmlEditorFormItem';
import Storage from 'src/security/storage';
import moment from 'moment';
import GroupFormItem from 'src/view/shared/form/items/GroupFormItem';
import FieldSetViewItem from 'src/view/shared/view/FieldSetViewItem';

const schema = yup.object().shape({
  link: yupFormSchemas.string(
    i18n('entities.page.fields.link'),
    {
      required: true,
      min: 1,
      max: 255,
    },
  ),
  meta_keywords: yupFormSchemas.string(
    i18n('entities.page.fields.meta_keywords'),
    {
      required: true,
      min: 1,
      max: 255,
    },
  ),
  meta_description: yupFormSchemas.string(
    i18n('entities.page.fields.meta_description'),
    {
      required: true,
      min: 1,
      max: 255,
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.page.fields.name'),
    {
      required: true,
      min: 1,
      max: 255,
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.page.fields.title'),
    {
      required: true,
      min: 1,
      max: 255,
    },
  ),
  teaser: yupFormSchemas.string(
    i18n('entities.page.fields.teaser'),
    {},
  ),
  body: yupFormSchemas.string(
    i18n('entities.page.fields.body'),
    {
      required: true,
    },
  ),
  page_image: yupFormSchemas.images(
    i18n('entities.page.fields.page_image'),
    {},
  ),
  teaser_link: yupFormSchemas.string(
    i18n('entities.page.fields.teaser_link'),
    {},
  ),
  teaser_title: yupFormSchemas.string(
    i18n('entities.page.fields.teaser_title'),
    {},
  ),
  activated: yupFormSchemas.boolean(
    i18n('entities.page.fields.activated'),
    {},
  ),
  pdf: yupFormSchemas.boolean(
    i18n('entities.page.fields.pdf'),
    {},
  ),
  created: yupFormSchemas.date(
    i18n('entities.page.fields.created'),
    {},
  ),
});

function PageForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      navigation: record.navigation,
      link: record.link || null,
      title: record.title || null,
      meta_keywords: record.meta_keywords || null,
      meta_description: record.meta_description,
      created: record.created
        ? moment(record.created)
            .utc()
            .format('YYYY-MM-DD HH:MM:SS')
        : null,
      author: record.author,
      related_links: record.related_links,
      page_image: record.page_image || null,
      teaser_link: record.page_image
        ? record.page_image[0]?.link
        : null,
      teaser_title: record.page_image
        ? record.page_image[0]?.linkTitle
        : null,
      teaser: record.teaser || null,
      name: record.name,
      body: record.body,
      activated: record.activated,
      pdf: record.pdf,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid xs={12} item>
              <FieldSetViewItem
                label={i18n(
                  'entities.page.fields.metadata',
                )}
              >
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <NavigationAutocompleteFormItem
                      name="navigation"
                      label={i18n(
                        'entities.page.fields.navigation',
                      )}
                      required={false}
                      showCreate={true}
                      variant="standard"
                      withChildren={true}
                      part="page"
                      id={props.record?.id || 0}
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <InputFormItem
                      name="link"
                      label={i18n(
                        'entities.page.fields.link',
                      )}
                      variant="standard"
                      required={true}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <InputFormItem
                      name="title"
                      label={i18n(
                        'entities.page.fields.title',
                      )}
                      variant="standard"
                      required={true}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextAreaFormItem
                      name="meta_keywords"
                      label={i18n(
                        'entities.page.fields.meta_keywords',
                      )}
                      variant="standard"
                      required={true}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextAreaFormItem
                      name="meta_description"
                      label={i18n(
                        'entities.page.fields.meta_description',
                      )}
                      variant="standard"
                      required={true}
                    />
                  </Grid>
                  {/* <Grid item md={12} xs={12}>
                <InputFormItem
                  name="created"
                  label={i18n(
                    'entities.page.fields.created',
                  )}
                  variant="standard"
                />
              </Grid> */}
                  <Grid item md={12} xs={12}>
                    <AuthorAutocompleteFormItem
                      name="author"
                      label={i18n(
                        'entities.page.fields.author',
                      )}
                      required={false}
                      showCreate={true}
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </FieldSetViewItem>
            </Grid>
            <Grid xs={12} item>
              <GroupFormItem
                name="related_links"
                label={i18n(
                  'entities.page.fields.relatedLinks',
                )}
                groupInputTemplates={[
                  {
                    input: InputFormItem,
                    name: 'name',
                    label: i18n(
                      'entities.page.fields.relatedLink.name',
                    ),
                    md: 6,
                    xs: 12,
                    defaultValue: '',
                    required: true,
                  },
                  {
                    input: InputFormItem,
                    name: 'url',
                    label: i18n(
                      'entities.page.fields.relatedLink.url',
                    ),
                    md: 6,
                    xs: 12,
                    defaultValue: '',
                    required: true,
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} item>
              <FieldSetViewItem
                label={i18n('entities.page.fields.teaser')}
              >
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <LogoFormItem
                      name="page_image"
                      label={i18n(
                        'entities.page.fields.page_image',
                      )}
                      storage={Storage.values.page_image}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <InputFormItem
                      name="teaser_link"
                      label={i18n(
                        'entities.page.fields.teaser_link',
                      )}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <InputFormItem
                      name="teaser_title"
                      label={i18n(
                        'entities.page.fields.teaser_title',
                      )}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <HtmlEditorFormItem
                      name="teaser"
                      label={i18n(
                        'entities.news.fields.teaser',
                      )}
                      value={initialValues.teaser}
                    />
                  </Grid>
                </Grid>
              </FieldSetViewItem>
            </Grid>
            <Grid xs={12} item>
              <FieldSetViewItem
                label={i18n(
                  'entities.page.fields.page_content',
                )}
              >
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <InputFormItem
                      name="name"
                      variant="standard"
                      label={i18n(
                        'entities.page.fields.name',
                      )}
                      required={true}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <HtmlEditorFormItem
                      name="body"
                      label={i18n(
                        'entities.news.fields.body',
                      )}
                      value={initialValues.body}
                      required={true}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <CheckboxFormItem
                      name="activated"
                      label={i18n(
                        'entities.page.fields.activated',
                      )}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <CheckboxFormItem
                      name="pdf"
                      label={i18n(
                        'entities.page.fields.pdf',
                      )}
                    />
                  </Grid>
                </Grid>
              </FieldSetViewItem>
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <MDButton
              variant="gradient"
              color={sidenavColor}
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </MDButton>

            <MDButton
              variant="outlined"
              color={sidenavColor}
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </MDButton>

            {props.onCancel ? (
              <MDButton
                variant="outlined"
                color={sidenavColor}
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </MDButton>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PageForm;
