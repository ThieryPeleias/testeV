import { use } from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RootLayout from "./layout";
import { Metadata } from "next";

export default async function RootLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const { t } = await serverSideTranslations(i18n.language, ["common"]);
  const locale = i18n.language;

  const metadata: Metadata = {
    title: t("common:metadata.title"),
    description: t("common:metadata.description"),
  };

  return (
    <RootLayout locale={locale} metadata={metadata}>
      {children}
    </RootLayout>
  );