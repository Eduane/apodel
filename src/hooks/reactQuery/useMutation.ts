import { useMutation, UseMutationResult } from "react-query";
import { deleteRequest, putRequest,postRequest } from "../../services/axios";

export const usePostMutation = <T>(
  path: string,
  onSuccesFunc?: any,
  onErrorFunc?: any,
): UseMutationResult<T, Error, any, unknown> => {
  return useMutation<T, Error, any, unknown>(
    async (payload): Promise<T> => {
      const result = await postRequest(path, payload);
      return result as T;
    },
    {
      async onSuccess(data): Promise<void> {
        if (onSuccesFunc) {
          onSuccesFunc(data);
        }
       //invalidate query here
      },
      onError(data): void {
        if (onErrorFunc) {
          onErrorFunc(data);
        }
      },
    }
  );
};

export const usePutMutation = <T>(
  path: string,
  onSuccesFunc?: any,
  onErrorFunc?: any,
): UseMutationResult<T, Error, any, unknown> => {
  return useMutation<T, Error, any, unknown>(
    async (payload): Promise<T> => {
      const result = await putRequest(path, payload);
      return result as T;
    },
    {
      async onSuccess(data): Promise<void> {
        if (onSuccesFunc) {
          onSuccesFunc(data);
        }     
       //invalidate query here

      },
      onError(data): void {
        if (onErrorFunc) {
          onErrorFunc(data);
        }
      },
    }
  );
};

export const useDeleteMutation = <T>(
  path: string,
  onSuccesFunc?: any,
  onErrorFunc?: any,
): UseMutationResult<T, Error, any, unknown> => {
  return useMutation<T, Error, any, unknown>(
    async (payload: string): Promise<T> => {
      const result = await deleteRequest(path,payload);
      return { data: result, payload:payload } as any;
    },
    {
      async onSuccess(data): Promise<void> {
        if (onSuccesFunc) {
          onSuccesFunc(data);
        }
       //invalidate query here
      },
      onError(data): void {
        onErrorFunc(data);
      },
    }
  );
};


