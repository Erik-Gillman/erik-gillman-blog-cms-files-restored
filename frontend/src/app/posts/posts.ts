export interface Posts{
  UUID: number,
  userId: number,
  title: string,
  content: string,
  createDate: Date,
  lastEdit: Date,
  creator: string,
  isComment: boolean
}
