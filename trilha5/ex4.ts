abstract class VoteSystem {
    protected votes: Record<string, number>;
  
    constructor() {
      this.votes = {};
    }
  
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): { candidate: string; votes: number }[] {
      return Object.entries(this.votes)
        .map(([candidate, votes]) => ({ candidate, votes }))
        .sort((a, b) => b.votes - a.votes); // Ordena do mais votado para o menos votado
    }
  }
  
  // Exemplo de uso
  const election = new Election();
  election.voteFor("Candidato A");
  election.voteFor("Candidato B");
  election.voteFor("Candidato A");
  console.log(election.getResults());
  
  const poll = new Poll();
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Y");
  poll.voteFor("Candidato X");
  poll.voteFor("Candidato Z");
  console.log(poll.getResults());
  