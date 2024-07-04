export interface IconType {
  icons: JSX.Element[];
}

export interface InfoType {
  title: string;
  stage?: string;
}

export interface SkillInfoType extends InfoType, IconType {}

export interface AboutDataType {
  title: string;
  info: (SkillInfoType | InfoType)[];
}

export type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};
