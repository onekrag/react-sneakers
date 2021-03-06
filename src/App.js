function App() {
	return (
		<div className="wrapper clear">
			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/img/logo.png" alt="Logo" />
					<div className="headerInfo">
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Магазин лучших кроссовок</p>
					</div>
				</div>

				<div>
					<ul className="d-flex align-center">
						<li className="mr-30 d-flex align-center">
							<img width={18} height={18} src="/img/cart.svg" alt="Cart" />
							<span>1205 руб.</span>
						</li>
						<li className="d-flex align-center">
							<img width={18} height={18} src="/img/user.svg" alt="User" />
						</li>
					</ul>
				</div>
			</header>

			<div className="content p-40">
				<h1 className="mb-40">Все кроссовки</h1>

				<div className="d-flex">
					<div className="card">
						<img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<buttom className="d-flex align-center justify-center button">
								<img width={11} height={11} src="/img/plus.svg" alt="" />
							</buttom>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<buttom className="d-flex align-center justify-center button">
								<img width={11} height={11} src="/img/plus.svg" alt="" />
							</buttom>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<buttom className="d-flex align-center justify-center button">
								<img width={11} height={11} src="/img/plus.svg" alt="" />
							</buttom>
						</div>
					</div>

					<div className="card">
						<img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<buttom className="d-flex align-center justify-center button">
								<img width={11} height={11} src="/img/plus.svg" alt="" />
							</buttom>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
