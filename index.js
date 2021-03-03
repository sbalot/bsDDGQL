const { ApolloServer, gql } = require('apollo-server')

let datas = [
  {
    "OrganizationCode": "ETIM",
    "DomainCode": "ETIM",
    "DomainVersion": "8.0",
    "DomainName": "",
    "ReleaseDate": null,
    "Status": "",
    "MoreInfoUrl": "",
    "UseOwnUri": false,
    "DomainNamespaceUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0",
    "LanguageIsoCode": "EN",
    "LanguageOnly": false,
    "License": "",
    "LicenseUrl": "",
    "QualityAssuranceProcedure": "",
    "QualityAssuranceProcedureUrl": "",
    "Classifications": [
      {
        "Code": "",
        "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/class/EC000843",
        "Uid": "",
        "Name": "Alarm signal",
        "Definition": "",
        "Status": "Active",
        "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
        "RevisionDateUtc": null,
        "VersionDateUtc": "2020-12-09T00:00:00+01:00",
        "DeActivationDateUtc": null,
        "VersionNumber": null,
        "RevisionNumber": null,
        "ReplacedObjectCodes": [],
        "ReplacingObjectCodes": [],
        "DeprecationExplanation": "",
        "CreatorLanguageIsoCode": "",
        "VisualRepresentationUri": "",
        "CountriesOfUse": [],
        "SubdivisionsOfUse": [],
        "CountryOfOrigin": "",
        "DocumentReference": "",
        "ClassificationType": "Class",
        "ParentClassificationCode": "",
        "RelatedIfcEntityNamesList": [],
        "Synonyms": [],
        "ClassificationRelations": [
          {
            "RelationType": "",
            "RelatedClassificationUri": ""
          }
        ],
        "ClassificationProperties": [
          {
            "Code": "",
            "PropertyCode": "",
            "PropertySet": "",
            "ExternalPropertyUri": "",
            "Unit": "",
            "SortNumber": null,
            "Symbol": "",
            "PropertyType": "",
            "PredefinedValue": "",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "Values": []
          }
        ],
        "Properties": [
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/class/EC000843",
            "Uid": "",
            "Name": "Degree of protection (NEMA)",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "String",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": ["Other", "4X", "3R", "13", "12","4","3","2","1"],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF005474",
            "Uid": "",
            "Name": "Degree of protection (IP)",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": ["IP32",
                "IP31",
                "IP30",
                "IP2X",
                "IP24",
                "IP23",
                "IP22",
                "IP21",
                "IP20",
                "IP12",
                "IP10",
                "IP00",
                "IP33",
                "IP34",
                "IP40",
                "Other",
                "IPX7",
                "IPX4",
                "IPX0",
                "IP68",
                "IP67",
                "IP3X",
                "IP66",
                "IP64",
                "IP58",
                "IP57",
                "IP56",
                "IP55",
                "IP54",
                "IP53",
                "IP52",
                "IP50",
                "IP45",
                "IP44",
                "IP43",
                "IP42",
                "IP41",
                "IP65"],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF009356",
            "Uid": "",
            "Name": "With radio control",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "Boolean",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": [],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF000003",
            "Uid": "",
            "Name": "Mounting method",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "String",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": ["Surface mounting",
                "DIN rail",
                "Built-in",
                "Cable",
                "Conductor bar",
                "Adapter plug",
                "Other",
                "Flush mounted (plaster)",  
                "Surface mounted (plaster)",
                "DRA (DIN-rail adapter)",
                "Wall duct",
                "Junction box insert for underfloor installation",
                "Module frame",
                "Built-in installation",
                "Front mounting",
                "Housing mounting",
                "Print mounting",
                "Floor fastening",
                "Front fastening",
                "Side mounting",
                "Bottom side",
                "Floor installation",
                "Pedestal (in-ground mounting)",
                "Post top",
                "Side entry",
                "Post top/side entry",
                "Suspended",
                "Steel wire",
                "Wall bracket",
                "Screw-on",
                "Clamping",
                "Plug-in",
                "Floor",
                "Bottom mounting",
                "Overhead line connection",
                "Busbar system",
                "Snap mounting",
                "Screw mounting"
                ],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF000587",
            "Uid": "",
            "Name": "Electricity consumption",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "Integer",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": ["A"],
            "PossibleValues": [],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF000143",
            "Uid": "",
            "Name": "Type of current",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "String",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": ["A"],
            "PossibleValues": ["AC",
                "AC/DC",
                "DC",
                "Rotating current",
                "AC single phase",
                "AC 3-phase",
                "Other"],
            "TextFormat": ""
          }
        ]
      },
      {
        "Code": "",
        "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/class/EC003239",
        "Uid": "",
        "Name": "Cement",
        "Definition": "",
        "Status": "Active",
        "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
        "RevisionDateUtc": null,
        "VersionDateUtc": "2020-12-09T00:00:00+01:00",
        "DeActivationDateUtc": null,
        "VersionNumber": null,
        "RevisionNumber": null,
        "ReplacedObjectCodes": [],
        "ReplacingObjectCodes": [],
        "DeprecationExplanation": "",
        "CreatorLanguageIsoCode": "",
        "VisualRepresentationUri": "",
        "CountriesOfUse": [],
        "SubdivisionsOfUse": [],
        "CountryOfOrigin": "",
        "DocumentReference": "BS EN 197-1",
        "ClassificationType": "Class",
        "ParentClassificationCode": "EG020650",
        "RelatedIfcEntityNamesList": [],
        "Synonyms": [],
        "ClassificationRelations": [
          {
            "RelationType": "",
            "RelatedClassificationUri": ""
          }
        ],
        "ClassificationProperties": [
          {
            "Code": "",
            "PropertyCode": "",
            "PropertySet": "",
            "ExternalPropertyUri": "",
            "Unit": "",
            "SortNumber": null,
            "Symbol": "",
            "PropertyType": "",
            "PredefinedValue": "",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "Values": []
          }
        ],
        "Properties": [
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF010097",
            "Uid": "",
            "Name": "Strength class",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": {
              "Name":"EN 197-1:2011",
              "Requirements":{
                "Name":"Soundness/Expansion",
                "maxValue":"10",
                "Unit":"mm"
              }
            },
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "String",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": ["32.5 N","32.5 R","42.5 N","42.5 R","52.5 N","52.5 R"],
            "TextFormat": ""
          },
          {
            "Code": "",
            "OwnedUri": "http://identifier.buildingsmart.org/uri/etim/etim-8.0/prop/EF010438",
            "Uid": "",
            "Name": "Type of cement",
            "Definition": "",
            "Status": "Active",
            "ActivationDateUtc": "2020-12-09T00:00:00+01:00",
            "RevisionDateUtc": null,
            "VersionDateUtc": "2020-12-09T00:00:00+01:00",
            "DeActivationDateUtc": null,
            "VersionNumber": null,
            "RevisionNumber": null,
            "ReplacedObjectCodes": [],
            "ReplacingObjectCodes": [],
            "DeprecationExplanation": "",
            "CreatorLanguageIsoCode": "",
            "VisualRepresentationUri": "",
            "CountriesOfUse": [],
            "SubdivisionsOfUse": [],
            "CountryOfOrigin": "",
            "DocumentReference": "",
            "Description": "",
            "Example": "",
            "ConnectedPropertyCodes": [],
            "PhysicalQuantity": "",
            "Dimension": "",
            "DimensionLength": null,
            "DimensionMass": null,
            "DimensionTime": null,
            "DimensionElectricCurrent": null,
            "DimensionThermodynamicTemperature": null,
            "DimensionAmountOfSubstance": null,
            "DimensionLuminousIntensity": null,
            "MethodOfMeasurement": "",
            "DataType": "",
            "MinInclusive": null,
            "MaxInclusive": null,
            "MinExclusive": null,
            "MaxExclusive": null,
            "Pattern": "",
            "IsDynamic": false,
            "DynamicParameterPropertyCodes": [],
            "Units": [],
            "PossibleValues": ["CEM I",
            "CEM II/A-S en CEM II/B-S",
            "CEM II/A-V en CEM II/B-V",
            "CEM II/B-T",
            "CEM III/A en CEM III/B",
            "CEM IV",
            "CEM V",
            "Other",
            "CEM II",
            "CEM III/A",
            "CEM III/B",
            "CEM III/C"],
            "TextFormat": ""
          }
        ]
      }
    ],
  }
]

const typeDefs = gql`

type Requirements {
  Name: String
  maxValue: String
  Unit: String
}

type DocumentReference {
  Name: String
  Requirements: Requirements
}

type Properties {
  Code: String
  OwnedUri: String
  Uid: String
  Name: String
  Definition: String
  Status: String
  ActivationDateUtc: String
  RevisionDateUtc: String
  VersionDateUtc: String
  DeActivationDateUtc: String
  VersionNumber: String
  RevisionNumber: String
  DeprecationExplanation: String
  CreatorLanguageIsoCode: String
  VisualRepresentationUri: String
  CountryOfOrigin: String
  Description: String
  Example: String
  PhysicalQuantity: String
  Dimension: String
  DimensionLength: String
  DimensionMass: String
  DimensionTime: String
  DimensionElectricCurrent: String
  DimensionThermodynamicTemperature: String
  DimensionAmountOfSubstance: String
  DimensionLuminousIntensity: String
  MethodOfMeasurement: String
  DataType: String
  MinInclusive: String
  MaxInclusive: String
  MinExclusive: String
  MaxExclusive: String
  Pattern: String
  IsDynamic: Boolean
  TextFormat: String
  PossibleValues: [String]
  Units: [String]
  DynamicParameterPropertyCodes: [String]
  ConnectedPropertyCodes: [String]
  DocumentReference: DocumentReference
  SubdivisionsOfUse: [String]
  CountriesOfUse: [String]
  ReplacingObjectCodes: [String]
  ReplacedObjectCodes: [String]
}

type ClassificationProperties {
  Code: String
  PropertyCode: String
  PropertySet: String
  ExternalPropertyUri: String
  Unit: String
  SortNumber: String
  Symbol: String
  PropertyType: String
  PredefinedValue: String
  MinInclusive: String
  MaxInclusive: String
  MinExclusive: String
  MaxExclusive: String
  Pattern: String
  Values: [String]
}

type ClassificationRelations {
  RelationType: String
  RelatedClassificationUri: String
}

type Classifications {
  Code: String
  OwnedUri: String
  Uid: String
  Name: String
  Definition: String
  Status: String
  ActivationDateUtc: String
  RevisionDateUtc: String
  VersionDateUtc: String
  DeActivationDateUtc: String
  VersionNumber: String
  RevisionNumber: String
  DeprecationExplanation: String
  CreatorLanguageIsoCode: String
  VisualRepresentationUri: String
  CountryOfOrigin: String
  DocumentReference: String
  ClassificationType: String
  ParentClassificationCode: String
  Properties: [Properties]
  ClassificationProperties: [ClassificationProperties]
  ClassificationRelations: [ClassificationRelations]
  Synonyms: [String]
  RelatedIfcEntityNamesList: [String]
  SubdivisionsOfUse: [String]
  CountriesOfUse: [String]
  ReplacingObjectCodes: [String]
  ReplacedObjectCodes: [String]
}

type data {
  OrganizationCode: String
  DomainCode: String
  DomainVersion: String
  DomainName: String
  ReleaseDate: String
  Status: String
  MoreInfoUrl: String
  UseOwnUri: Boolean
  DomainNamespaceUri: String
  LanguageIsoCode: String
  LanguageOnly: Boolean
  License: String
  LicenseUrl: String
  QualityAssuranceProcedure: String
  QualityAssuranceProcedureUrl: String
  Classifications: [Classifications]
}

type Query {
  domainCount:Int!
  alldomains:[data!]!
  allClassificationindomain (DomainCode: String!):[Classifications]
  finddomain(DomainCode: String!): data
}
`

const resolvers = {
  Query: {
    domainCount: () => datas.length,
    alldomains:()=>datas,
    allClassificationindomain:(root, args)=>
      datas.find(p=>p.DomainCode==args.DomainCode),                             //01.03.2021, 20:30 does not work!
    finddomain:(root, args)=>
      datas.find(p=>p.DomainCode==args.DomainCode)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})