<template>
  <NuxtLayout>
    <div class="pt-20 px-4 max-w-screen-xl mx-auto prose">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1>
            Sichere dir jetzt deinen Freimonat für das Digitalpaket SELLWERK
            Prime
          </h1>
          <p>
            Mit SELLWERK Prime machst du dein Unternehmen fit für die
            Digitalisierung. Informiere tagesaktuell über Angebote,
            Öffnungszeiten oder deinen Onlineshop und gewinne so neue Kunden!
          </p>
          <Button size="lg">Jetzt kostenlos testen</Button>
        </div>
        <img src="/images/home/home.png" />
      </div>
      <h2 class="text-center">
        Du kennst SELLWERK noch nicht? Dann wird es Zeit!
      </h2>
      <p class="text-center">
        150.000 SELLWERK-Kunden profitieren schon von den Vorteilen.<br />
        Erfahre mehr darüber - und werde Teil des Netzwerks!
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
      >
        <BenefitCard
          v-for="card of benefitsCards"
          :key="card.title"
          v-bind="card"
        />
      </div>
      <div class="flex items-center justify-center mt-8">
        <Button variant="outlined">Kostenlos Registrieren</Button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { benefitsCards } from "@/constants/landing/benefits-cards";
</script>
