describe('Progress Form Tests', () => {
  beforeEach(() => {
    // Charger la page de formulaire avant chaque test
    cy.visit('http://localhost:8000/src/index.html'); // Remplacez par l'URL correcte de votre formulaire
  });

  it('should progress to the next fieldset and fetch data from server', () => {
    // Assurez-vous que le formulaire est présent
    cy.get('form').should('exist');

    // Stub la requête fetch pour le backend
    cy.intercept('POST', 'http://localhost:8000/src/backend.php', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          template: "<fieldset class='fieldset2'><label for='password' required-field>Password:</label><input type='password' name='password' id='password'><div class='button-container'><button type='button' __prev__>prev</button><button type='submit' __submit__>submit</button></div></fieldset>"
        }
      });
    }).as('fetchNextFieldSet');

    // Initialiser ProgressForm et LazyProgressForm
    cy.window().then((win) => {
      const form = win.document.querySelector('form');
      const uri = 'http://localhost:8000/src/backend.php';
      const lazyProgress = new win.LazyProgressForm(form, uri);

      // Démarrer LazyProgressForm avec les options données
      lazyProgress.lazyRun({
        fieldsetLength: 3,
        progressOptions: {
          translateX: -700
        },
        styleOptions: {
          form: {
            width: "700px"
          },
          fieldset: {
            width: "640px"
          },
          fieldsetContainer: {
            justifyContent: "null"
          }
        }
      }).fetchNextFieldSet({
        spinner: "Chargement...",
        preventSubmit: true,
        shouldRepost: true,
        callback(response, status, index, ...data) {
          // Ajoutez ici les assertions que vous souhaitez effectuer dans le callback
          expect(status).to.eq(200);
          cy.get('fieldset.fieldset2').should('exist');
        },
      });
    });

    // Simuler le clic sur le bouton "Next"
    cy.get('.next1').click();

    // Attendre que la requête se termine et vérifier les assertions
    cy.wait('@fetchNextFieldSet').then((interception) => {
      assert.isNotNull(interception.response.body, 'Fetch response body is not null');
    });
  });
});
