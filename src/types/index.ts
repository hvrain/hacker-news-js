import View from '../core/view'

export interface NewsStore {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  numberOfFeed: number;
  hasFeeds: boolean;
  getAllFeeds: () => NewsFeed[];
  getFeed: (position: number) => NewsFeed;
  setFeeds: (feeds: NewsFeed[]) => void;
  makeRead: (id: number) => void;
}

export interface News {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly time_ago: string;
  readonly content: string;
}
 
export interface NewsFeed extends News {
  readonly comments_count: number;
  readonly points: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface RouteInfo {
  path: string;
  page: View;
}