export type Ipc = {
  updateData: (data: Record<string, unknown>) => void;
};
export type IpcKey = keyof Ipc;
