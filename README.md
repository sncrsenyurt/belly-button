![image](https://github.com/sncrsenyurt/belly-button-challenge/assets/35157651/526ca1f3-3650-40bb-aef2-98e1cf2ea256)



# Belly Button Challenge

This project is an interactive dashboard that explores the Belly Button Biodiversity dataset, which contains information about the microbes found in human navels.

## Dataset
The Belly Button Biodiversity dataset provides insights into the microbial species, known as operational taxonomic units (OTUs), present in human navels. The dataset indicates that a small number of OTUs are commonly found in more than 70% of people, while the rest are relatively rare.

## Instructions
To complete this project, follow these steps:
 
 1. Use the D3 library to read the `samples.json` file, which contains the dataset.

 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use `sample_values` as the values for the bar chart.
    * Use `otu_ids` as the labels for the bar chart.
    * Use `otu_labels` as the hovertext for the chart.
    
 3. Create a bubble chart that displays each sample.
    * Use `otu_ids` for the x values.
    * Use `sample_values` for the y values.
    * Use `sample_values` for the marker size.
    * Use `otu_ids` for the marker colors.
    * Use `otu_labels` for the text values.  

  4. Display the sample metadata, which includes demographic information about an individual.


  5. Show each key-value pair from the metadata JSON object somewhere on the page.
 
  6. Update all the plots whenever a new sample is selected. Feel free to design the layout of your dashboard as you wish.

  7. Deploy your application to a free static page hosting service like GitHub Pages.
  
  For detailed code implementation and further instructions, refer to the corresponding code files and the dataset documentation.
  
  ## Deployment
  The application can be accessed on a free static page hosting service, such as GitHub Pages. To deploy the application, follow the deployment instructions provided in the project documentation.
  
  ## Conclusion
  The Belly Button Challenge project offers an interactive dashboard that allows users to explore the Belly Button Biodiversity dataset. By visualizing the microbial data in bar and bubble charts, users can gain insights into the prevalence and distribution of microbial species in human navels. Additionally, the sample metadata provides demographic information about the individuals included in the dataset.
  
