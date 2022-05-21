INSERT INTO department (name)
VALUES
  ('Development'),
  ('Sales'),
  ('Operations');


INSERT INTO role (title, salary, department_id)
VALUES
(Jr Dev, 70000, 1),
(Sr Dev, 90000, 1),
(Sales, 80000, 2),
(Project Manager, 100000, 3),
(CIO, 130000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 4),
  ('Virginia', 'Woolf', 3, 5),
  ('Piers', 'Gaveston', 3, 5),
  ('Charles', 'LeRoi', 1, 4),
  ('Katherine', 'Mansfield', 2, 4),
  ('Dora', 'Carrington', 4, 4),
  ('Edward', 'Bellamy', 3, 5),
  ('Montague', 'Summers', 2, 4),
  ('Octavia', 'Butler', 1, 4),
  ('Unica', 'Zurn', 5, 5);


