package main

import "fmt"
import "time"

func funcA(chA chan <- string) {
	fmt.Println("before sleep")
	time.Sleep(2 * time.Second)
	fmt.Println("after sleep")
	chA <- "Finished" // チャネルにメッセージを送信
}

func main() {
	chA := make(chan string) // チャネルを作成
	defer close(chA) // 使い終わったらクローズ
  go funcA(chA) // チャネルをゴルーチンに渡す
	msg := <- chA // チャネルからメッセージを受信
	fmt.Println(msg)
}
