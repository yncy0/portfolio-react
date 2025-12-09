INSERT INTO about(description)
VALUES('Hello there! My name is Yancy. A front-end developer that focuses on building and collaboration among front-end projects specially Vue/Nuxt.
      Driven by curiosity, I also venture into other technologies when I take a break doing front-end stuff such as back-end development, game development, and the Linux technology.');

INSERT INTO education(title, description, year)
VALUES('La Consolacion University Philippines', 'Bachelor of Science in Information Technology', 'Undergrad'),
      ('La Consolacion University Philippines', 'Technological Vocational Course - Information and Communications Technology', '2022');

INSERT INTO badges(title)
VALUES('Vue/React Developer'),
      ('Golang Developer'),
      ('Web Developer');

INSERT INTO hero_title(name, description)
VALUES('', '');

INSERT INTO projects(id, title, description, image_url, github_url, project_url)
VALUES (
          1, 
          'Portfolio',
          'This project is to showcase my other projects and skills. It is made with Nuxt, Tailwind CSS, and Shadcn/Vue',
          '',
          'https://github.com/yncy0/portfolio',
          'https://monthsary-website.nuxt.dev/'
        ),
        (
          2, 
          'Monthsary Website',
          'A fun project dedicated to my girlfriend❤️. This Project compose of Nuxt + Nuxt plugins and ecosystem, Tailwdind CSS, and Supabase as back-end',
          '',
          'https://github.com/yncy0/portfolio',
          'https://monthsary-website.nuxt.dev/'
        );

