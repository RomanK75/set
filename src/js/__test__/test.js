import Team from '../main';

test('Team creation', () => {
  const team = new Team();
  expect(team).toBeInstanceOf(Team);
});

test('Adding members', () => {
  const team = new Team();
  team.add('Ivan');
  expect(team.toArray()).toEqual(['Ivan']);
  team.addAll(['Petr', 'Ivan', 'Jack', 'Jack']);
  expect(team.toArray()).toEqual(['Ivan', 'Petr', 'Jack']);
});
