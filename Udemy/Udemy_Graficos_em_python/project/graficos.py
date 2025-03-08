import polars as pl
import matplotlib.pyplot as plt

from data.constants import databases, columns, PAISES



class Graficos:
    def __init__(self):
        self.df = pl.read_csv(databases.CSV)
        self.years = columns.COLUMNS_YEARS
        self.xticks_positions = self.years[::5]
        
        self.df_brazil = self._df_pais(self.df, "Brasil")

        self.df_comp = (
            self.df.filter(pl.col("País").is_in(["Brasil", "Argentina"]))
            .unpivot(
                index=["País"],
                on=self.years,
                variable_name="Ano",
                value_name="Imigrantes"
            )
            .pivot(
                index="Ano",
                on="País",
                values="Imigrantes"
            )
            .sort("Ano")
        )

    def _df_pais(self, df, pais):
        df_return = (
            df.filter(pl.col("País") == pais)
            .unpivot(
                index=["País"],
                on=self.years,
                variable_name="Ano",
                value_name="Imigrantes"
            )
        )

        return df_return

    def _base_config(self):
        """Configurações comuns para todos os gráficos"""
        plt.figure(figsize=(12, 6))
        plt.xlabel("Ano", fontsize=12)
        plt.ylabel("Número de Imigrantes", fontsize=12)
        plt.grid(True, alpha=0.3)
        plt.xticks(rotation=45)


    def show_brazil(self):
        self._base_config()
        plt.title("Imigração do Brasil para o Canadá (1980-2013)", fontsize=14)
        plt.plot(
            self.df_brazil["Ano"],
            self.df_brazil["Imigrantes"],
            marker='o',
            linestyle='-',
            color='green'
        )
        plt.xticks(self.df_brazil["Ano"][::5])
        plt.tight_layout()
        plt.show()


    def show_comparison(self):
        self._base_config()
        plt.title("Comparação Brasil vs Argentina (1980-2013)", fontsize=14)
        
        plt.plot(
            self.df_comp["Ano"],
            self.df_comp["Brasil"],
            label="Brasil",
            marker='o',
            linestyle='-',
            color='blue'
        )
        
        plt.plot(
            self.df_comp["Ano"],
            self.df_comp["Argentina"],
            label="Argentina",
            marker='o',
            linestyle='-',
            color='orange'
        )
        
        plt.legend()
        plt.xticks(self.df_comp["Ano"][::5])
        plt.tight_layout()
        plt.show()


# Criacao com modelo de figura
    def _base_one_figure_config(self):
        fig, ax = plt.subplots(figsize=(8,4))
        plt.xlabel("Ano", fontsize=12)
        plt.ylabel("Número de Imigrantes", fontsize=12)
        return fig, ax
       

    def show_figure_brazil(self):
        fig, ax = self._base_one_figure_config()
        ax.set_title("Comparação Brasil vs Argentina (1980-2013)", fontsize=14)

        ax.plot(
            self.df_brazil['Ano'],
            self.df_brazil['Imigrantes']
        )
        
        ax.xaxis.set_major_locator(plt.MultipleLocator(3))
        plt.show()


# Dois graficos em tela
    def _base_two_figure_config(self):
        fig, axs = plt.subplots(1,2, figsize=(15,5))

        for ax in axs.flat:
            ax.grid(True)
        return fig, axs
    

    def show_figure_two_graphics(self):
        fig, axs = self._base_two_figure_config()

        # Primeiro Grafico
        axs[0].set_title("Comparação Brasil vs Argentina (1980-2013)", fontsize=14)
        axs[0].set_xlabel("Ano", fontsize=12)
        axs[0].set_ylabel("Número de Imigrantes", fontsize=12)
        axs[0].plot(
            self.df_brazil["Ano"],
            self.df_brazil["Imigrantes"],
            marker='o',
            linestyle='-',
        )
        axs[0].xaxis.set_major_locator(plt.MultipleLocator(3))

        # Segundo Grafico
        axs[1].set_title("Boxplot Brasil vs Argentina (1980-2013)", fontsize=14)
        axs[1].boxplot(
            self.df_brazil["Imigrantes"]
        )
        axs[1].set_xlabel("Brasil")
        plt.show()


# Fazendo com 4 graficos, atualmente na aula 7 do modulo 1...
    def _base_for_figure_config(self):
        fig, axs = plt.subplots(2,2, figsize=(18,7))
        xticks_positions = self.xticks_positions

        for ax in axs.flat:
            ax.grid(True)
            ax.set_xlabel("Ano", fontsize=12)
            ax.set_ylabel("Número de Imigrantes", fontsize=12)
            ax.set_xticklabels([str(year) for year in self.xticks_positions])

        return fig, axs


    def show_figure_for_graphics(self):
        fig, axs = self._base_for_figure_config()

        df = self._df_pais(self.df, "Brasil")
        print(df)

        axs[0,0].plot()

        plt.show()


if __name__ == "__main__":

    gf = Graficos()

    # gf.show_brazil()
    gf.show_figure_for_graphics()
    

