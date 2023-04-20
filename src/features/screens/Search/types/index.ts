import Page from "@/@types/Page";

export type PageSearchParams = Pick<
  Page<any, any>,
  'page' | 'pageSize' | 'order' | 'sort' | 'total'
>;