import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import { Grid } from '@mui/material';
import CheckboxViewItem from 'src/view/shared/view/CheckboxViewItem';
import PromotionViewItem from 'src/view/promotion/view/PromotionViewItem';
import HtmlViewItem from 'src/view/shared/view/HtmlViewItem';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import LogoViewItem from 'src/view/shared/view/LogoViewItem';

function PromotionView(props) {
  const renderView = () => {
    const { record } = props;
    return (
      <>
        <Grid spacing={2} container>
          <Grid item md={12} xs={12}>
            <TextViewItem
              label={i18n('entities.promotion.fields.name')}
              value={record.promotion_image[0].linkTitle}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextViewItem
              label={i18n('entities.promotion.fields.link')}
              value={record.promotion_image[0].link}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <MDBox pt={7}>
              <LogoViewItem
                label={i18n(
                  'entities.promotion.fields.uploadfile',
                )}
                value={record.promotion_image}
              />
            </MDBox>
          </Grid>
          <Grid item md={6} xs={12}>
            <CheckboxViewItem
              label={i18n(
                'entities.promotion.fields.activated',
              )}
              checked={record.activated}
            />
          </Grid>
        </Grid>
      </>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default PromotionView;
