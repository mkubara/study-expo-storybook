
# 概要

- [Storybook for React Native](https://storybook.js.org/basics/guide-react-native/)

# ハンズオン

https://expo.io/@mkubara/test-storybook

### インストール

```
expo init sbtest
cd sbtest
yarn
npx -p @storybook/cli sb init
```

### 手動修正箇所

App.js の export default class App 以下をすべてコメントアウトし、かわりに下記を追加；

```
import StorybookUI from './storybook';
export default StorybookUI;
```

### 実行

```
expo start
> i
```

expo-cli で i をして、iOS Simulator で確認できる。うまくインストールできない場合は、再度 i を押すか、expo client を一度削除してみると良いかも。

> expo-cliを一旦止めて、 `yarn storybook` で立ち上げ直す、という情報があるが、私は expo-cli で立ち上げて実行できた。

# 任意のディレクトリ構成に対応する

expo はネイティブモジュールの読み込みに対応していないため、Node.js の path も使用できない。そのため、require.context がエラーになってしまうことから、regexp などを使用したファイル指定に対応できない。

これに対応するパッケージとして、 [react-native-storybook-loader](https://github.com/elderfo/react-native-storybook-loader) があるので、次のように設定する；

#### install
```
yarn add -D react-native-storybook-loader
```

#### package.json
```
  "config": {
    "react-native-storybook-loader": {
      "searchDir": ["./src/client/native"],
      "pattern": "**/*.stories.js",
    }
  }
```

#### /storybook/index.js
```
import { loadStories } from './storyLoader';

configure(() => loadStories(), module);
```

#### generate storyLoader
```
yarn run rnstl
```

以上で、react-native-storybook-loader が /storybook/storyLoader.js を自動生成し、これのなかにstoriesがすべて展開された状態になるので、storybookからそれらのstoriesが参照可能な状態になり、表示される。

storybook を追加するたびに、この作業は必要。（要自動化）

# その他雑感

- 2018/11 に storybook v4 へ react-native の onDevice シミュレータが搭載されたばかりで、ネット上の情報が安定していない。
- [storybook/lib/cli at master · storybooks/storybook](https://github.com/storybooks/storybook/tree/master/lib/cli)
  - getstorybook は sb に置き換わった。ただ現状のsbだと、 `sb init` しても babel-core v6 が入るので、微妙にちぐはぐしている。

# references
### v4以降
- [Storybook for React Native v4.0.2 を動かした時のメモ - あいつの日誌β](http://okamuuu.hatenablog.com/entry/2018/11/01/221852)
- [What’s new in Storybook 4.0 React Native – Storybook – Medium](https://medium.com/storybookjs/whats-new-in-storybook-4-0-react-native-741c7f481bbb)

### v3以前
- [Using Storybook with React Native](https://pusher.com/tutorials/storybook-react-native)
- [ReactNativeにStorybookを導入する | mrsekutの備忘録](https://mrsekut.site/?p=2491)

### etc
- [Expo SDK v31.0.0 is now available – Exposition](https://blog.expo.io/expo-sdk-v31-0-0-is-now-available-cad6d0463f49)
