document.addEventListener('DOMContentLoaded', () => {

	const users = [
		{
			name: 'Anakin Skywalker',
			eyeColoe: 'Blue',
			birthYear: '41.9BBY',
			gender: 'male'
		},
		{
			name: 'Mon Mothma',
			eyeColoe: 'Blue',
			birthYear: '48BBY',
			gender: 'female'
		},
		{
			name: 'Arvel Crynyd',
			eyeColoe: 'Brown',
			birthYear: '8BBY',
			gender: 'male'
		},
		{
			name: 'Anakin Skywalker',
			eyeColoe: 'Blue',
			birthYear: '41.9BBY',
			gender: 'male'
		},
		{
			name: 'Mon Mothma',
			eyeColoe: 'Blue',
			birthYear: '48BBY',
			gender: 'female'
		},
		{
			name: 'Arvel Crynyd',
			eyeColoe: 'Brown',
			birthYear: '8BBY',
			gender: 'male'
		},
		{
			name: 'Anakin Skywalker',
			eyeColoe: 'Blue',
			birthYear: '41.9BBY',
			gender: 'male'
		},
		{
			name: 'Mon Mothma',
			eyeColoe: 'Blue',
			birthYear: '48BBY',
			gender: 'female'
		},
		{
			name: 'Arvel Crynyd',
			eyeColoe: 'Brown',
			birthYear: '8BBY',
			gender: 'male'
		},
				{
			name: 'Mon Mothma',
			eyeColoe: 'Blue',
			birthYear: '48BBY',
			gender: 'female'
		},

	]

	document.getElementById('cards-container').innerHTML = users.map(user =>
    `	<div class="cards__item">
				<img class="cards__item-user" src="images/dist/${user.gender === 'male' ? 'man': 'woman'}-user.svg" alt="User">
				<p class="cards__item-name">${user.name}</p>
				<div class="cards__item-info">
					<div class="info__left">
						<p>Eye color</p>
						<p>Birth year</p>
						<p>Gender</p>
					</div>
					<div class="info__right">
						<p>${user.eyeColoe}</p>
						<p>${user.birthYear}</p>
						<i class="man fas fa-${user.gender === 'male' ? 'mars': 'venus'}"></i>
					</div>
				</div>
			</div>`
	).join('')

	const button = document.querySelector('.aside__title');
	const content = document.querySelector('.form__list');

	button.addEventListener('click', function() {
		this.classList.toggle('active');
		content.classList.toggle('active');
	});

})
