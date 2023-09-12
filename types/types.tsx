import { ReactNode } from "react";

export type MainLayoutType = {
  children: ReactNode;
};
export type RefSpanType = {
  id: string;
  height: string;
};
export type NavLinkType = {
  title: string;
  href: string;
  onClick?: () => void;
};
export type ItemType = {
  titulo: string;
  tips: string[];
  href: string;
  delayProp: number;
};
export type ThisLayoutType = {
  children: ReactNode;
  title: string;
  textContent: string;
};
export type ArticleLayoutType = {
  children: ReactNode;
  headTitle: string;
  pageTitle?: string;
};
export type TextAndInputType = {
  name: string;
  title: string;
  placeholder: string;
  type: string;
};
export type LinkAndIconType = {
  href: string;
  title: string;
  children: JSX.Element;
};
export type OpinionCardType = {
  name: string;
  image: string;
  message: string;
  message2?: string;
};
export type NewBoxType = {
  Title: String;
  SubTitle: String;
  Day: String;
  Time: String;
};
export type mediaType = {
  dir: "row" | "column";
  size: number | undefined;
  colored?: boolean;
};
type locationType = {
  sede: string;
  direccion: string;
  localidad: string;
  iframe: string;
};
export type mapaType = {
  location: locationType;
};