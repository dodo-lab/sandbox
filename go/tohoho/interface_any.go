package main

import "fmt"

type Person struct {
	name string
}

func (p Person) ToString() string {
	return p.name
}

type Food struct {
	calory int
}

// 'interface {}'は、any型のように使用可能.
func funcA(a interface {}) {
	// '.(型名)'は、'interface {}'型の変数を他の型に変換する.
  fmt.Printf("%d\n", a.(int))
}

type Printable interface {
	ToString() string
}

func PrintOut(a interface {}) {
	// 型変換の第二戻り値は、型変換可能かどうかを返す.
	p, ok := a.(Printable)
	if ok {
		fmt.Println(p.ToString())
	} else {
		fmt.Println("Not printable.")
	}
}

func funcSwitch(a interface {}) {
	// switch 変数.(type) {...} で、型を判断することも可能.
	switch a.(type) {
	case bool:
		fmt.Printf("%t is bool\n", a)
	case int:
		fmt.Printf("%d is int\n", a)
	case string:
		fmt.Printf("%s is string\n", a)
	}
}

type any interface {}
type dict map[string]any

func main() {
	p := Person {name: "山田太郎"}
	f := Food {calory: 100}
	PrintOut(p)
	PrintOut(f)

	funcSwitch(false)
	funcSwitch("hoge")
	funcSwitch(35)

	// interface {}を用いることで、任意の型の値を持つマップを定義することも可能
	m1 := dict {
		"name": "Yamada",
		"age": 26,
	}
	fmt.Println(m1["name"])

	m2 := dict {
		"name": "Yamada",
		"age": 26,
		"address": dict {
			"zip": "123-4567",
			"tel": "012-3456-7890",
		},
	}
	fmt.Println(m2["address"].(dict)["tel"]) // 'address'配下はdictに変換してから参照
}