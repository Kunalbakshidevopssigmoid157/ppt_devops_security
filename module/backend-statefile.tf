terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
  backend "azurerm" {
    storage_account_name  = "<storage-account-name>"
    storage_account_key   = "<storage-account-access-key>"
    container_name        = "tfstate"
    key                   = "terraform.tfstate"
    storage_table_name    = "tfstate"
  }

}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "state-demo-secure" {
  name     = "state-demo"
  location = "eastus"
}