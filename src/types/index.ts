export type Language = 'ar' | 'en';

export type PortalType = 'admin' | 'teacher' | 'student';

export interface TechItem {
  name: string;
  category: string;
  roleAr: string;
  roleEn: string;
  badge: string;
  iconName: string;
}

export interface PortalFeature {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  tagAr: string;
  tagEn: string;
}

export interface PortalDetail {
  id: PortalType;
  nameAr: string;
  nameEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeAr: string;
  badgeEn: string;
  features: PortalFeature[];
  metrics: { labelAr: string; labelEn: string; value: string }[];
}
