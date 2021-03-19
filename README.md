# mol3022

## Running the project

1. Clone the repo `git clone https://github.com/sunnivablock/mol3022.git`
2. Go to the file directory: `cd TFBSPredictor`
3. Install dependencies: `npm install`
4. Run the app: `npm start`
5. The application is now running at http://localhost:3000

## About the project

This react application displays a probability score of different transcription factor binding sites when provided with a matrix id and DNA sequence.
The Position Frequency Matrix (PFM) given for a Transcription Factor (TF), is fetched from the Jaspar API: http://jaspar.genereg.net/api/v1/matrix/. The PFM is used to calculate the corresponding Position Weight Matrix (PWM), before the PWM is used to calculate the most likely binding site on the given DNA sequence.

## Dependencies
We used Victory to display the graph https://formidable.com/open-source/victory/

