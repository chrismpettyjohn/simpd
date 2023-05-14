import './SettingsProfile.css';
import { Helmet } from 'react-helmet'
import React, { useContext } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { ProfileGuard, sessionContext } from '@simpd/lib-web';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileSettingsCard } from './profile-settings-card/ProfileSettingsCard';
import { SettingsNavigation } from 'components/settings-navigation/SettingsNavigation';

export function SettingsProfileScreen() {
  const { profile } = useContext(sessionContext);

  return (
    <ProfileGuard redirect>
      <Helmet>
        <title>Settings-Profile - Simpd</title>
        <meta property="og:title" content="Settings-Profile - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <ProfileSettingsCard />
      <CardAccordion header="Additional Info">
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
    </ProfileGuard>
  )
}