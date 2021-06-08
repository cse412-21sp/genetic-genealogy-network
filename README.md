# CSE412 Final Project Template (Idyll)

## Team Members

Raphael Bakin \
Andrew Bingham \
Nick Bohmann \
Karin Borgerson \
Hana Morris \


### Contribution Statements

**Raphael Bakin**: Worked on editing story, edited video \
**Andrew Bingham**:  Led development of pedigree visualization, worked on color coding of visualizations, helped edit story and create video presentation \
**Nick Bohmann**: Led development of network graphs, worked on color coding of visualizations, resolved D3 embedding issues, helped edit story, helped write script and develop video presentation \
**Karin Borgerson**: Acquired and anonymized GEDmatch data, provided other genealogical data, wrote initial draft of story copy, contributed to encoding decisions on visualizations, created circle graphs that ended up on the cutting room floor, participated in creating video and editing final deliverable. \
**Hana Morris**: Led development of Idyll page, helped edit story, helped write script and develop video presentation

## Project Proposal Abstract

The goal of this project was to use visualization techniques to decipher the often difficult to understand results of direct-to-consumer DNA testing, and to unravel the mystery of one of our team members’ family tree. To this end, we created a page that explored the relationships between individuals from the GEDmatch Database that shared DNA with our team member, Karin, and how these data could be used to reconstruct a family pedigree. Using a combination of force-directed network graphs and pedigree charts, we constructed a narrative that helps the reader understand and explore these data, and uncover a decades-old family secret along the way. 

## Getting Started

This template is a starting place for your project. Update the header information to include the relevant details for your project, and then feel free to mix and match the visualization and layout techniques introduced here for your own narrative.

Think about how the narrative structure draws readers into the story you are telling and how the visualizations interact with the text (and with each other). The narrative should help ensure that the page as a whole is greater than just the sum of it's parts. When designing your page, decide on particular layouts that enhance the reader's experience and understanding of the topic.

### Required Software

You must have Node.js installed. You can get it directly from https://nodejs.org/en/.

### Installation

- Clone and open your project repo on your own computer.
- Make sure you have `idyll` installed (`npm i -g idyll`).
- Run `npm install` to install project-specific dependencies.

npm is the node package manager. If you're curious how this works and what the project dependencies are, open up `package.json` to see where these are listed.

You can install custom dependencies by running `npm install <package-name> --save`. Note that any collaborators will also need to download the package locally by running `npm install` after pulling the changes.

### Developing a post locally

Run `idyll` from the command line. Your post will appear at [http://localhost:3000/](http://localhost:3000/). When the server is running, any local change that you make will be deteched and your webpage will auto-update with the new changes. Your local changes will not be visible to your team members until you push the changes to your repository. These changes will not be reflected in the final website unless you run the build script and push the updated docs folder (see below).

### Building a post for production

Run `idyll build`. The output will appear in the top-level `build` folder. To change the output location, change the `output` option in `package.json`.

### Deploying

Make sure your post has been built, then commit the `docs` folder to your project repository. It will be available at [cse412-21sp.github.io/your-repo-name/](). For example, you can view the sample embedded Tableau, vega-lite, and d3 charts at [https://cse412-21sp.github.io/Final-Project-Template](https://cse412-21sp.github.io/Final-Project-Template).

#### Acknowledgements

This template was adapted from the initial Scrollytelling template for Idyll. The code and visualization examples were adapted from the [final project template](https://github.com/cse412-21w/project-demo) created for a previous offering of CSE 412.
