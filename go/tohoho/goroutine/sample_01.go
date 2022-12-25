package main

import "fmt"
import "time"

// ゴルーチンはGo言語における並行処理を実現するもので、スレッドより高速に並行処理を実現することが可能.
func funcA() {
	for i := 0; i < 10; i++ {
		fmt.Print("A")
		time.Sleep(10 * time.Millisecond)
	}
}

func main() {
	go funcA()
	for i := 0; i < 10; i++ {
		fmt.Print("M")
		time.Sleep(20 * time.Millisecond)
	}
}