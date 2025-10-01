<!DOCTYPE html>
<html lang="ca">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Valeria Santana">
    <meta name="description" content="Formulari de contacte">
    <meta name="keywords" content="formulari, contacte, HTML5, CSS">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulari de contacte</title>
    <style>
        body {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        h1 {
            text-align: center;
        }

        input {
            display: block;
            margin-top: 10px;
        }

        textarea {
            display: block;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <h1>Formulari de contacte</h1>


    <form method="post" action="">
        <fieldset>
            <legend>Si us plau ompliu els següents camps i clickeu a Enviar consultar.</legend>

            <p>
                <label for="inNom">Nom:</label>
                <input type="text" id="inNom" name="nom" placeholder="Conchi" required>
            </p>

            <p>
                <label for="inCognoms">Cognoms:</label>
                <input type="text" id="inCognoms" name="cognoms" placeholder="Katuplaiska" required>
            </p>

            <p>
                <label for="inEmail">Correu electrònic:</label>
                <input type="email" id="inEmail" name="email" placeholder="tubebe0316@gmail.com" required>
            </p>

            <p>
                <label for="inLlamada">Data trucada del comercial:</label>
                <input type="date" id="inLlamada" name="dataTrucada"
                    min="2025-09-30" max="2025-10-30" required>
            </p>

            <p>
                <label for="inTelefon">Telèfon:</label>
                <input type="tel" id="inTelefon" name="telefon" placeholder="789 456 471"
                    pattern="\d{3} \d{3} \d{3}" required>
            </p>

            <p>
                <label for="inSatisfac">Grau de satisfacció (0-100):</label>
                <input type="range" id="inSatisfac" name="satisfaccio" min="0" max="100">
            </p>

            <p>
                <label for="inOpinio">Opinió (opcional):</label><br>
                <textarea id="inOpinio" name="opinio" cols="50" rows="10"
                    placeholder="Me gustan las vacas molonas..."></textarea>
            </p>

            <p>
                <input type="submit" name="enviar" value="Enviar consulta">
                <input type="reset" name="resetear" value="Buidar els camps">
            </p>
        </fieldset>
    </form>

    <?php
    if (!empty($_POST)) {
        echo "<pre>" . print_r($_POST, true) . "</pre>";
    }
    ?>

</body>

</html>