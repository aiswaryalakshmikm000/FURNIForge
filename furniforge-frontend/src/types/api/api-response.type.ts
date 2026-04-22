export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error: null | {
    code: string;
    details?: unknown;
  };
};