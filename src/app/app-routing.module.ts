import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conexao',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'operacao',
    loadChildren: () => import('./operacao/operacao.module').then( m => m.OperacaoPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'receita1',
    loadChildren: () => import('./receita1/receita1.module').then( m => m.Receita1PageModule)
  },
  {
    path: 'receita2',
    loadChildren: () => import('./receita2/receita2.module').then( m => m.Receita2PageModule)
  },
  {
    path: 'receita3',
    loadChildren: () => import('./receita3/receita3.module').then( m => m.Receita3PageModule)
  },
  {
    path: 'receita4',
    loadChildren: () => import('./receita4/receita4.module').then( m => m.Receita4PageModule)
  },
  {
    path: 'receita5',
    loadChildren: () => import('./receita5/receita5.module').then( m => m.Receita5PageModule)
  },
  {
    path: 'receita6',
    loadChildren: () => import('./receita6/receita6.module').then( m => m.Receita6PageModule)
  },
  {
    path: 'receita7',
    loadChildren: () => import('./receita7/receita7.module').then( m => m.Receita7PageModule)
  },
  {
    path: 'receita8',
    loadChildren: () => import('./receita8/receita8.module').then( m => m.Receita8PageModule)
  },
  {
    path: 'receita9',
    loadChildren: () => import('./receita9/receita9.module').then( m => m.Receita9PageModule)
  },
  {
    path: 'receita10',
    loadChildren: () => import('./receita10/receita10.module').then( m => m.Receita10PageModule)
  },
  {
    path: 'limpeza',
    loadChildren: () => import('./limpeza/limpeza.module').then( m => m.LimpezaPageModule)
  },
  {
    path: 'manutencao',
    loadChildren: () => import('./manutencao/manutencao.module').then( m => m.ManutencaoPageModule)
  },
  {
    path: 'entradade-graos',
    loadChildren: () => import('./entradade-graos/entradade-graos.module').then( m => m.EntradadeGraosPageModule)
  },
  {
    path: 'conexao',
    loadChildren: () => import('./conexao/conexao.module').then( m => m.ConexaoPageModule)
  },
  {
    path: 'gestao',
    loadChildren: () => import('./gestao/gestao.module').then( m => m.GestaoPageModule)
  },
  {
    path: 'limpeza-tempo-b1',
    loadChildren: () => import('./limpeza-tempo-b1/limpeza-tempo-b1.module').then( m => m.LimpezaTempoB1PageModule)
  },
  {
    path: 'limpeza-tempo-b2',
    loadChildren: () => import('./limpeza-tempo-b2/limpeza-tempo-b2.module').then( m => m.LimpezaTempoB2PageModule)
  },
  {
    path: 'limpeza-tempo-b3',
    loadChildren: () => import('./limpeza-tempo-b3/limpeza-tempo-b3.module').then( m => m.LimpezaTempoB3PageModule)
  },
  {
    path: 'limpeza-tempo-b4',
    loadChildren: () => import('./limpeza-tempo-b4/limpeza-tempo-b4.module').then( m => m.LimpezaTempoB4PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
