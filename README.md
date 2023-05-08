# このアプリケーションについて
## 【このアプリケーションの概要】
このアプリケーションは、教育版マインクラフトのスキンパックを簡単に作成できるようにするために作成されました。  
![GitHub release (latest by date)](https://img.shields.io/github/downloads/Hoshimikan6490/minecraft-education_skinpack-generator/v1.1.2/total?color=498205&label=%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89%E6%95%B0&style=for-the-badge)

## 【権利等に関して】
このアプリケーションの著作権は、Hoshimikan6490(作者に関しては、別項目を参照してください)です。

## 【注意事項】
- 作者は、このアプリケーションによって生じた一切の問題や損害に対して、責任を負いません。予めご了承ください。
- 「temp」フォルダーの中身は、消しても問題ありません。しかし、「temp」フォルダーを削除するとプログラムが正常に動作しなくなりますので、消さないようにしてください。
- 別項目に記載した、ファイル構成を変更しないでください。プログラムが正常に動作しなくなる可能性があります。

## 【ファイル構成】　※ファイル/フォルダ名に丸括弧で囲まれている場合は、ファイル/フォルダ名は任意の物で構いません。※大なりと小なりで囲まれている場合は、その指示に従ってください。
　![file_organization](/file_organization.png)

## 【再配布等に関して】
このアプリケーションを無断で再配布や販売等をすることを禁じます。ただし、作者に対して再配布の目的や範囲を事前に相談し、作者の了解を得た場合はこの限りではありません。

## 【作者に関して】
- 名前：　Hoshimikan6490
- Twitter ID：　@Hoshimikan6490
- その他、SNS等：　https://lit.link/hoshimikan6490

## 【バグ等について】
プログラムの設計には万全を期しておりますが、万が一バグ等が見つかった場合は、TwitterのDMまでお問い合わせください。

***
# このアプリケーションの使い方
1. 「public」フォルダ内の、「images」フォルダと「temp」フォルダ内の「you_need_to_remove_this_file」というファイルを削除する。
2. 「public」フォルダ内の「settings.json」というファイルをメモ帳などで開く
```json
    {
        "skinpack_name_en": "skinpack",
        "skinpack_name_ja": "スキンパック",
        "slim_skin": false
    }
```
- 「skinpack_name_en」は、英語のスキンパック名です。(変えてもあまり変わりません)
- 「skinpack_name_ja」は、日本語でのスキンパック名(好きな文字に変えてください。ただし、バグ防止のため、記号は使用しないことをお勧めします)
- 「slim_skin」は、スリムスキン(「アレックススキン」ともいう)を使用するかどうかを設定します。(falseは、通常スキン。trueは、スリムスキン。)

3. 「public」フォルダ内の「images」フォルダに、使用したいスキンの画像ファイルを入れる。
4. 「skinpack_generator.exe」を起動する。
5. 生成された「skinpack.mcpack」を開く。
