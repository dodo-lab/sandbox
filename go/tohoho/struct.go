package main

import "fmt"

// 構造体にはメンバ変数のみ定義
type Person struct {
	name string
	age int
	// 大文字で始まるメンバ変数はパッケージ外からもアクセス可能となる
	Status int
}

// クラスメソッドに相当する関数は(変数名 *構造体名)を付与した上で定義
func (p *Person) SetPerson(name string, age int) {
	p.name = name
	p.age = age
}

func (p *Person) GetPerson() (string, int) {
	return p.name, p.age
}

func main() {
	var p1 Person
	p1.SetPerson("Yamada", 26)
	name, age := p1.GetPerson()
	fmt.Printf("name = %s, age = %d\n", name, age)

	// 宣言と同時に初期化も可能
	p2 := Person {"Tanaka", 27, 0} // メンバ変数の定義順に初期化
	p3 := Person {name: "Sakai", age: 28, Status: 0} // 変数名指定で初期化
	fmt.Printf("name = %s, age = %d\n", p2.name, p2.age)
	fmt.Printf("name = %s, age = %d\n", p3.name, p3.age)
}