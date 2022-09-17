import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/section/view/sectionViewActions';
import selectors from 'src/modules/section/view/sectionViewSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import SectionView from 'src/view/section/view/SectionView';
import SectionViewToolbar from 'src/view/section/view/SectionViewToolbar';

function SectionPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Card>
        <MDBox py={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDBox
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <MDTypography variant="h4">
                {i18n('entities.section.view.title')}
              </MDTypography>
            </MDBox>
            <SectionViewToolbar match={match} />
          </MDBox>

          <SectionView loading={loading} record={record} />
        </MDBox>
      </Card>
    </>
  );
}

export default SectionPage;
