---
layout: page
permalink: /assets/openscience/
title: open science
description: Compilation of peer-reviewed Datasets, Software and Scripts
nav: true
nav_order: 3
---



### Pollen-based climate reconstructions

* Chevalier et al. (2020): Mean annual tempeature reconstruction from marine core MD96-2048, Mozambique Channel (0--790,000 cal BP) DOI: 10.1594/PANGAEA.915923 [<a href="2020_MD96-2048_MAT.xlsx" download>MAT</a>]
* Chevalier (2019): Annual precipitation reconstruction from Lake Van, Turkey (10,200--133,900 cal BP) DOI: 10.1594/PANGAEA.898171 [<a href="2019_Lake-Van_Annual-Rainfall.xlsx" download>Annual precip.</a>]
* Cordova et al. (2017): Temperature and precipitation reconstruction from Lake Ngami, Botswana (0--16,700 cal BP) [<a href="2017_Lake-NGami_Summer-precip" download>MAT&precip.</a>]
* Lim et al. (2016): Temperature and precipitation reconstruction from Pella, South Africa (0--50,000 cal BP) [<a href="2016_Pella_MAT-Rainfall.xlsx" download>MAT&precip.</a>]
* Chevalier and Chase (2016): South African Summer Rainfall zone (SRZ) aridity reconstructions (0-45,000 cal BP) [<a href="test.txt" download>aridity stacks</a>]
* Chase et al. (2015a): Summer and Winter precipitation reconstruction from Katbakkies Pass, South Africa (690--6880 cal BP) [<a href="2015_Katbakkies-Pass_Summer-Winter-Precip" download>Summer&Winter precip</a>]
* Chase et al. (2015b): Aridity reconstruction from De Rif, South Africa (0--19,400 cal BP) [<a href="2015_De-Rif_Aridity.xlsx" download>Aridity</a>]
* Chevalier and Chase (2015): South African Summer Rainfall zone (SRZ) MAT and summer precipitation stacks (0--45,000 cal BP) [<a href="2015_Southern-Africa-SRZ_MAT-Rainfall.xlsx" download>MAT&precip stack</a>]


<br />
### _crestr_ An R package to perform probabilistic palaeoclimate reconstructions from palaeoecological datasets

The goal of _crestr_ is to produce probabilistic reconstructions of past climate change from fossil assemblage data (Chevalier, 2022). The package can be installed from the usual channels (CRAN and GitHub). The package includes a global calibration dataset for several palaeoecological proxies. A suite of graphical outputs were designed to enable an in-depth understanding of the results. More information is available from [https://mchevalier2.github.io/crestr/index.html](https://mchevalier2.github.io/crestr/index.html)


<p align="center">
    <img src="crestr-example-app.png" alt="crestr-example-app" width="80%"/>
</p>


How to cite: Chevalier, M.: _crestr_: an R package to perform probabilistic climate reconstructions from palaeoecological datasets, Climate of the Past, 18(4), 821–844, [doi:10.5194/cp-18-821-2022](https://www.doi.org/10.5194/cp-18-821-2022), 2022.


<br />
### Data compilations

<br />
##### _gbif4crest_ calibration dataset

This database contains all the presence records of plants, beetles, rodents chironomids, foraminifera and diatoms contained in the GBIF database in October 2020. The coordinates of the presence records have been homogenised on a 0.25x0.25° grid, and corresponding bioclimatic values from the Worldclim2.0 and World Ocean Atlas databases have been added. These data are formatted and ready to use by the CREST software. Additional python scripts have been added to group plant species into pollen types. 


<p align="center">
    <img src="gbif4crest.png" alt="gbif4crest" width="80%"/>
</p>


How to cite: Chevalier, M.: GBIF database for CREST, [https://figshare.com/articles/GBIF_for_CREST_database/6743207](https://figshare.com/articles/GBIF_for_CREST_database/6743207), doi:10.6084/m9.figshare.6743207, 2018.


<br />
##### The Eurasian Modern Pollen Database v2 (EMPD2)


The EMPD is a standardised, fully documented and quality-controlled dataset of modern pollen samples which can be openly accessed, and to which scientists can also contribute and help maintain. After a major community based effort starting in 2011 we have now established a modern surface sample database within the EPD that contains almost 5000 samples. The Eurasian Modern Pollen Database (EMPD) is now available and free to download. The data includes both specifically collected modern surface samples from a variety of environments (soil, moss bolsters, lake and bog sediments etc), as well as modern ‘core top’ samples from fossil pollen cores.

<p align="center">
    <img src="EMPD2.png" alt="EMPD2" width="80%"/>
</p>


How to cite: Chevalier, M., Davis, B. A. S., Sommer, P. S., Zanon, M., Carter, V. A., Phelps, L. N., Mauri, A. and Finsinger, W.: Eurasian Modern Pollen Database (former European Modern Pollen Database), doi:[10.1594/PANGAEA.909130](https://doi.pangaea.de/10.1594/PANGAEA.909130), 2019.


<br />
##### Global Lake Status Database (GLSDB) in Africa

A relational database on late-Quaternary lake status of 67 sites in eastern and southern Africa, and related documentation and analytical methodology. Data on site characteristics, chronology and lake-status history was assembled into 9 tables, which are combined into a relational SQLite database

- Lakes: This table contains a unique site identifier, site name, coordinates and basic information on present hydrology and morphometry.
- Contributors: This table includes the name and ORCID of the researcher who contributed the site history to the database, and the date (month/year) when the data were included in the database.
- Alternative Names: This table links the site identifier with alternative site names used in the literature.
- Refs: This table contains all the references used to compile the database.
- Dating: This table contains the original individual dates as well as the outcome of their reanalysis as part of the newly generated chronologies.
- Coding Basis: This table contains the site-specific definitions of all status classes.
- Coding Source: This table lists which lake-status indicators were available in the consulted literature, and which of these were used in the consensus lake-status reconstruction.
- Lake Size: This table provides information on absolute water depth or lake-level elevation as recorded by geomorphological features.
- Coding: This table contains the lake-status histories. These consist of sequences of episodes each defined by a start time, end time, relative lake status and associated uncertainties.
- A number of additional tables is used to store lists of accepted values for specific fields or to link the different data tables together.



<p align="center">
    <img src="GLSDBAfrica.png" alt="GLSDBAfrica" width="80%"/>
</p>

How to cite: De Cort, G., Chevalier, M., Burrough, S.L. Chen, C.Y. and Harrison, S: An uncertainty-focused database approach to extract spatiotemporal trends from qualitative and discontinuous lake-status histories, doi:[10.5281/zenodo.4494804](https://doi.org/10.5281/zenodo.4494804), 2021.


<br />
