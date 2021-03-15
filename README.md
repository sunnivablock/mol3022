# mol3022

## Running the project

1. Clone the repo `git clone https://github.com/sunnivablock/mol3022.git`
2. Go to the file directory: `cd bioProsjekt`
3. Install dependencies: `npm install`
4. Run the app: `npm start`
5. The application is now running at http://localhost:3000

## About the project

This react application displays the transcription factor binding sites when provided with a matrix id and DNA sequence.
The matrix position frequenct matrix(PFM) is fetched from the jaspar API: http://jaspar.genereg.net/api/v1/matrix/ and used to calculate the position weight matrix(PWM) of the matrix and then the matching binding sites to the DNA sequence.

## Dependencies
We used Victory to display the graph https://formidable.com/open-source/victory/

