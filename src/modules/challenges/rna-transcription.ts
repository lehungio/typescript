export function toRna(dna: string): string {
  // throw new Error('Remove this statement and implement this function')

  let rna = '';
    for (let nucleotide of dna) {
        switch (nucleotide) {
            case 'A':
                rna += 'U';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'G':
                rna += 'C';
                break;
            case 'T':
                rna += 'A';
                break;
            default:
                throw new Error('Invalid input DNA.');
        }
    }
    return rna;
}