export interface IError {
  data?: string;
  error?: { message: string; stack: string };
  internal?: boolean;
  status?: number;
  statusText?: string;
}
