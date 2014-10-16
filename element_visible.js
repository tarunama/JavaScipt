function element_visible() {
	// チェックする要素
	var hoge = document.getElementById('hoge').value;
	var foo	= document.getElementById('foo').value;

	// 要素に値が入っているかのチェック
	if (!hoge || !foo) {
		// 値が入っていないとき、要素を操作。
		document.getElementById('hoge').disabled = true;
		document.getElementById('foo').disabled = true;
		return false;
	}

	// 要素をvisaibleに
	document.getElementById('hoge').disabled = false;
	document.getElementById('foo').disabled = false;
}