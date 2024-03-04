export interface Posts{
  postId?: number,
  userId: number,
  title: string,
  content: string,
  createDate: Date,
  lastEdit: Date,
  creator: string,
  //isComment: boolean
}
