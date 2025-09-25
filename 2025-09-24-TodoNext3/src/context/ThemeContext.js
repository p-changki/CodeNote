import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);
// (1) ThemeContext라는 채널을 만든다. Provider가 값을 주입하기 전까지는 null이 기본값.

export function useTheme() {
  // (2) useTheme 훅을 실행하면,
  const ctx = useContext(ThemeContext);
  // (3) useContext(ThemeContext)는 현재 컴포넌트가 속한 트리에서
  //     가장 가까운 ThemeContext.Provider의 value를 꺼내서 ctx에 넣는다.
  //     만약 Provider가 없다면 ctx === null

  if (!ctx) {
    // (4) Provider가 없는데 useTheme을 쓰면 null이 들어오므로,
    //     개발자가 바로 알 수 있게 에러를 던진다.
    throw new Error("ThemeProvider 안에서만 useTheme을 사용할 수 있습니다.");
  }

  // (5) Provider가 제대로 감싸져 있으면 ctx({ theme, toggleTheme })를 반환한다.
  return ctx;
}
