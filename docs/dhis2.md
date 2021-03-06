# DHIS2

<!---Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate with common tools, and (2) to educate any OpenFn user/the wider sector.--->

## Overview

The District Health Information Software 2
([DHIS2](https://www.dhis2.org/about))] is an open source, web-based health
management information system ([HMIS](https:/some.useful.info)) platform.

Today, DHIS2 is the world's largest HMIS platform, in use by 73 low and
middle-income countries. Approximately 2.4 billion people live in countries
where DHIS2 is used. Including NGO-based programs, DHIS2 is in use in more than
100 countries.

The [core DHIS2](https://some.useful.info) software development is managed by
the Health Information Systems Program ([HISP](https://some.useful.info)) at the
University of Oslo ([UiO](https://some.useful.info)).

HISP is a global network comprised of 13 in-country and regional organizations,
providing day-in, day-out direct support to government ministries and local
implementers of DHIS2.

DHIS2 exposes its data and service method integration pipeline through a
[RESTful](https://some.useful.info) Web Application Programing
Ineterface([API](https://some.useful.info)). The
[DHIS2 Web API](https://some.useful.info) is a component which makes it possible
for external systems to access and manipulate data stored in an instance of
DHIS 2. More precisely, it provides a programmatic interface to a wide range of
exposed data and service methods for applications such as third-party software
clients, web portals and internal DHIS 2 modules.

### Integration Use Cases

DHIS2 has been expanding its reach into many health systems. Starting from its
familiar grounds of aggregate data sets for routine data it has included patient
related data and then data in the areas of HR, finance, logistics and laboratory
management.

For several years now, DHIS2 has grown its data management activities
organically, allowing the actual usage to lead to sometimes unforeseen
solutions. However, there are also limits to where leveraging DHIS2 seems
useful. In the following sections, special systems will be described.

#### Example user stories

1 Logistics Management(LMIS)

- LMIS is an area where a multitude of parallel, overlapping or competing
  software solutions can be found in a single country
- Although a basic LMIS configuration based on aggregate data can take you very
  far, in some cases a transactional LMIS is necessary if you need to track such
  detailed operations as returns, transfer between facilities, barcode reading,
  batch and expiry managemen
- In such a situation...

2 Data Sharing for Health and Nutrition, Water Sanitation and Hygiene Projects

- Case management sytsems such as CommCare are widely preffered in collecting
  case data(or patient level data) due to its dominance in the sector and easy
  of adoption. In such scenarios, ...

3 DHIS2 Instance Synchronization

- Different DHIS2 instances in a given organisation or government ministry may
  be deployed on separate servers which places the need for synchronization in
  both metadata and data values. DHIS2 provides API endpoints to enable which
  enable organisations to automate the synchronization process of data/metadata
  across a cluster of DHIS2 servers.

### Further Reading:

1 [DHIS2 Web API](https://docs.dhis2.org/2.22/en/developer/html/ch01.html)

2
[DHIS2 Integration Concepts](https://docs.dhis2.org/2.28/en/implementer/html/integration.html#:~:text=DHIS2%20is%20often%20used%20as,on%20stocks%20and%20human%20resources.)

3
[DHIS2 Integration Scenarios](https://docs.dhis2.org/master/en/implementer/html/different-dhis2-integration-scenarios.html)

4
[Interoperable DHIS2-LMIS in Senegal, Tanzania and Ghana](https://www.childhealthtaskforce.org/sites/default/files/2019-01/Interoperable%20DHIS2-LMIS%20in%20Senegal%2C%20Tanzania%2C%20and%20Ghana%20%28HISP%20Team%20at%20UIO-2017%29.pdf)

5
[CRVS Fellowship report SmartVA and DHIS2 integration in Sri Lanka](https://crvsgateway.info/file/17042/3010https://crvsgateway.info/file/17042/3010)

## Integration Options

1. Data integration via DHIS2 Web API..

2. Metadata integration via DHIS2 Web API...

## OpenFn Adaptor

About & link to `language-dhis2`

## Integration Examples

Links to sample jobs/ code snippets
