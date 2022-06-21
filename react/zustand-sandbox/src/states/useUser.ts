import create from 'zustand';

type State = {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
  clear: () => void;
  serif: () => string;
};

export const useUser = create<State>((set, get) => ({
  name: '',
  age: 0,
  setName: name => set({name}),
  setAge: age => set({age}),
  clear: () => set({name: '', age: 0}),
  serif: () => `My name is ${get().name}.I'm ${get().age} years old.`,
}));
